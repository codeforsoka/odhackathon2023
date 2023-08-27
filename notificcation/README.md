# Webプッシュ

Push.jsを使って実装した。
### 参考ページ
- https://pushjs.org/
- https://zenn.dev/sdkfz181tiger/articles/e62a1f99270f5f

## 実効方法

### イメージをビルドする

```
docker build -t app:1 .
```

### コンテナを起動する

```
docker run --rm -p 8001:80 app:1 
```

### ブラウザから参照する

MacでChromeから参照すると、プッシュ通知が表示されない。
Safariからだと表示される。

```
http://loalhost:8001
```