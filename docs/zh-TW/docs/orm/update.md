# 更新实体

::: tip Testing Is Documentation
[tests/Database/Ddd/Update/UpdateTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Database/Ddd/Update/UpdateTest.php)
:::
    
将实体变更持久化到数据库。

**Uses**

``` php
<?php

use Leevel\Database\Ddd\Entity;
use Tests\Database\DatabaseTestCase as TestCase;
use Tests\Database\Ddd\Entity\CompositeId;
use Tests\Database\Ddd\Entity\DemoDatabaseEntity;
use Tests\Database\Ddd\Entity\DemoEntity;
use Tests\Database\Ddd\Entity\DemoReadonlyUpdateEntity;
use Tests\Database\Ddd\Entity\DemoUpdateAutoFillEntity;
use Tests\Database\Ddd\Entity\DemoUpdatePropWhiteEntity;
```

## save 更新一个实体

存在主键数据，则可以通过 `save` 方法更新一个实体。

**完整例子**

``` php
$entity = new DemoEntity(['id' => 1], true);
$entity->name = 'foo';
$entity->save()->flush();
```

调用 `save` 方法并没有立刻真正持久化到数据库，这一个步骤计算好了待保存的数据。

**完整模型**

``` php
namespace Tests\Database\Ddd\Entity;

use Leevel\Database\Ddd\Entity;

class DemoEntity extends Entity
{
    const TABLE = 'test';

    const ID = 'id';

    const AUTO = 'id';

    const STRUCT = [
        'id' => [
            self::READONLY => true,
        ],
        'name' => [],
    ];

    private array $data = [];

    private static ?string $connect = null;

    public function setter(string $prop, $value): self
    {
        $this->data[$this->realProp($prop)] = $value;

        return $this;
    }

    public function getter(string $prop)
    {
        return $this->data[$this->realProp($prop)] ?? null;
    }

    public static function withConnect(?string $connect = null): void
    {
        static::$connect = $connect;
    }

    public static function connect(): ?string
    {
        return static::$connect;
    }
}
```


``` php
public function testBaseUse(): void
{
    $entity = new DemoEntity(['id' => 1], true);
    $entity->name = 'foo';

    $this->assertInstanceof(Entity::class, $entity);
    $this->assertSame(1, $entity->id);
    $this->assertSame('foo', $entity->name);
    $this->assertSame(['name'], $entity->changed());
    $this->assertNull($entity->flushData());
    $entity->save();

    $data = <<<'eot'
        [
            {
                "id": 1
            },
            {
                "name": "foo"
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
::: tip
通过 save 方法更新一个实体，并通过 flush 将实体持久化到数据库。
:::
    
## update 更新一个实体

``` php
public function testUpdateBaseUse(): void
{
    $entity = new DemoEntity(['id' => 1], true);
    $entity->name = 'foo';

    $this->assertInstanceof(Entity::class, $entity);
    $this->assertSame(1, $entity->id);
    $this->assertSame('foo', $entity->name);
    $this->assertSame(['name'], $entity->changed());
    $this->assertNull($entity->flushData());
    $entity->update();

    $data = <<<'eot'
        [
            {
                "id": 1
            },
            {
                "name": "foo"
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
::: tip
通过 update 方法保存一个实体，并通过 flush 将实体持久化到数据库。
:::
    
## 更新一个实体支持更新属性白名单

**完整模型**

``` php
namespace Tests\Database\Ddd\Entity;

use Leevel\Database\Ddd\Entity;

class DemoUpdatePropWhiteEntity extends Entity
{
    const TABLE = 'test';

    const ID = 'id';

    const AUTO = 'id';

    const STRUCT = [
        'id' => [
            self::UPDATE_PROP_WHITE => true,
            self::READONLY          => true,
        ],
        'name' => [
            self::UPDATE_PROP_WHITE => true,
        ],
        'description' => [],
    ];

    private array $data = [];

    private static ?string $connect = null;

    public function setter(string $prop, $value): self
    {
        $this->data[$this->realProp($prop)] = $value;

        return $this;
    }

    public function getter(string $prop)
    {
        return $this->data[$this->realProp($prop)] ?? null;
    }

    public static function withConnect(?string $connect = null): void
    {
        static::$connect = $connect;
    }

    public static function connect(): ?string
    {
        return static::$connect;
    }
}
```

调用 `\Leevel\Database\Ddd\Entity::UPDATE_PROP_WHITE => true` 来设置字段白名单，一旦设置了更新属性白名单只有通过了白名单的字段才能够更新模型属性。


``` php
public function testUpdatePropBlackAndWhite(): void
{
    $entity = new DemoUpdatePropWhiteEntity(['id' => 5], true);
    $entity->name = 'foo';
    $entity->description = 'hello description';
    $entity->update();

    $data = <<<'eot'
        [
            {
                "id": 5
            },
            {
                "name": "foo"
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
## fill 设置允许自动填充字段

**完整模型**

``` php
namespace Tests\Database\Ddd\Entity;

use Leevel\Database\Ddd\Entity;

class DemoUpdateAutoFillEntity extends Entity
{
    const TABLE = 'test';

    const ID = 'id';

    const AUTO = 'id';

    const STRUCT = [
        'id' => [
            self::READONLY => true,
        ],
        'name' => [
            self::UPDATE_FILL       => 'name for '.self::UPDATE_FILL,
        ],
        'description' => [
            self::UPDATE_FILL    => null,
        ],
        'address' => [
            self::UPDATE_FILL    => null,
        ],
        'foo_bar' => [
            self::UPDATE_FILL    => null,
        ],
        'hello' => [
            self::UPDATE_FILL      => null,
        ],
    ];

    private array $data = [];

    private static ?string $connect = null;

    public function setter(string $prop, $value): self
    {
        $this->data[$this->realProp($prop)] = $value;

        return $this;
    }

    public function getter(string $prop)
    {
        return $this->data[$this->realProp($prop)] ?? null;
    }

    public static function withConnect(?string $connect = null): void
    {
        static::$connect = $connect;
    }

    public static function connect(): ?string
    {
        return static::$connect;
    }

    protected function fillDescription($old): string
    {
        return 'set description.';
    }

    protected function fillAddress($old): string
    {
        return 'address is set now.';
    }

    protected function fillFooBar($old): string
    {
        return 'foo bar.';
    }

    protected function fillHello($old): string
    {
        return 'hello field.';
    }
}
```


``` php
public function testUpdateAutoFillWithCustomField(): void
{
    $entity = new DemoUpdateAutoFillEntity(['id' => 5], true);
    $entity
        ->fill(['address', 'hello'])
        ->update();

    $data = <<<'eot'
        [
            {
                "id": 5
            },
            {
                "address": "address is set now.",
                "hello": "hello field."
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
::: tip
默认情况下，不会自动填充，除非指定允许填充字段。
:::
    
## fillAll 设置允许自动填充字段为所有字段

``` php
public function testUpdateAutoFillWithAll(): void
{
    $entity = new DemoUpdateAutoFillEntity(['id' => 5], true);
    $entity
        ->fillAll()
        ->update();

    $data = <<<'eot'
        [
            {
                "id": 5
            },
            {
                "name": "name for update_fill",
                "description": "set description.",
                "address": "address is set now.",
                "foo_bar": "foo bar.",
                "hello": "hello field."
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
## save 自动判断操作快捷方式支持添加数据

**完整模型**

``` php
namespace Tests\Database\Ddd\Entity;

use Leevel\Database\Ddd\Entity;

class DemoDatabaseEntity extends Entity
{
    const TABLE = 'test';

    const ID = 'id';

    const AUTO = 'id';

    const STRUCT = [
        'id' => [
            self::READONLY => true,
        ],
        'name'      => [],
        'create_at' => [],
    ];

    private array $data = [];

    private static ?string $connect = null;

    public function setter(string $prop, $value): self
    {
        $this->data[$this->realProp($prop)] = $value;

        return $this;
    }

    public function getter(string $prop)
    {
        return $this->data[$this->realProp($prop)] ?? null;
    }

    public static function withConnect(?string $connect = null): void
    {
        static::$connect = $connect;
    }

    public static function connect(): ?string
    {
        return static::$connect;
    }
}
```


``` php
public function testSaveWithProp(): void
{
    $entity = new DemoDatabaseEntity(['id' => 1]);
    $entity->save(['name' => 'hello']);

    $data = <<<'eot'
        [
            {
                "id": 1
            },
            {
                "name": "hello"
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
## update 更新快捷方式支持添加数据

``` php
public function testUpdateWithProp(): void
{
    $entity = new DemoDatabaseEntity(['id' => 1]);
    $entity->update(['name' => 'hello']);

    $data = <<<'eot'
        [
            {
                "id": 1
            },
            {
                "name": "hello"
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );
}
```
    
## update 更新快捷方式存在更新数据才能够保存

``` php
public function testUpdateWithNoData(): void
{
    $this->expectException(\RuntimeException::class);
    $this->expectExceptionMessage('Entity `Tests\\Database\\Ddd\\Entity\\DemoDatabaseEntity` has no data need to be update.');

    $entity = new DemoDatabaseEntity(['id' => 1]);
    $entity->update();
}
```
    
## update 更新快捷方式存在主键数据才能够保存

``` php
public function testUpdateWithPrimaryKeyData(): void
{
    $this->expectException(\InvalidArgumentException::class);
    $this->expectExceptionMessage('Entity Tests\\Database\\Ddd\\Entity\\DemoDatabaseEntity has no primary key data.');

    $entity = new DemoDatabaseEntity();
    $entity->update();
}
```
    
## save 自动判断操作快捷方式复合主键例子

**完整模型**

``` php
namespace Tests\Database\Ddd\Entity;

use Leevel\Database\Ddd\Entity;

class CompositeId extends Entity
{
    const TABLE = 'composite_id';

    const ID = ['id1', 'id2'];

    const AUTO = null;

    const STRUCT = [
        'id1'      => [],
        'id2'      => [],
        'name'     => [],
    ];

    private array $data = [];

    private static ?string $connect = null;

    public function setter(string $prop, $value): self
    {
        $this->data[$this->realProp($prop)] = $value;

        return $this;
    }

    public function getter(string $prop)
    {
        return $this->data[$this->realProp($prop)] ?? null;
    }

    public static function withConnect(?string $connect = null): void
    {
        static::$connect = $connect;
    }

    public static function connect(): ?string
    {
        return static::$connect;
    }
}
```


``` php
public function testSaveWithCompositeId(): void
{
    $connect = $this->createDatabaseConnect();

    $this->assertSame(
        1,
        $connect
            ->table('composite_id')
            ->insert([
                'id1'     => 2,
                'id2'     => 3,
            ]));

    $entity = new CompositeId();
    $entity->save(['id1' => 2, 'id2' => 3, 'name' => 'hello']);

    $data = <<<'eot'
        [
            {
                "id1": 2,
                "id2": 3,
                "name": "hello"
            }
        ]
        eot;

    $this->assertSame(
        $data,
        $this->varJson(
            $entity->flushData()
        )
    );

    $entity->flush();
}
```