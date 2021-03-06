# 查询语言.sql

::: tip Testing Is Documentation
[tests/Database/Query/SqlTest.php](https://github.com/hunzhiwange/framework/blob/master/tests/Database/Query/SqlTest.php)
:::
    
**Uses**

``` php
<?php

use Tests\Database\DatabaseTestCase as TestCase;
```

## 基本用法

``` php
public function testBaseUse(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` ORDER BY `test_query`.`create_at` DESC LIMIT 1",
            [],
            false
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->table('test_query')
                ->sql(true)
                ->latest()
                ->findOne()
        )
    );

    $sql = <<<'eot'
        [
            "delete from test where id = ?",
            [
                22
            ]
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->sql(true)
                ->delete('delete from test where id = ?', [22]),
            1
        )
    );
}
```
    
## 例外 findOne 等也支持快捷

绝大多数都支持这个功能，例如 findAll,insertAll 等。

``` php
public function testFindOne(): void
{
    $connect = $this->createDatabaseConnectMock();

    $sql = <<<'eot'
        [
            "SELECT `test_query`.* FROM `test_query` ORDER BY `test_query`.`create_at` DESC LIMIT 1",
            [],
            false
        ]
        eot;

    $this->assertSame(
        $sql,
        $this->varJson(
            $connect
                ->table('test_query')
                ->latest()
                ->findOne(true),
            2
        )
    );
}
```