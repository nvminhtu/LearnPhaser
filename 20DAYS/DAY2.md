# DAY 2: Cơ bản (phần 2) 

### Ví dụ học
* Tween an image (tạo hình biến/chuyển động).
* Render Text (Hiển thị text ra màn hình)

### Sound manager & Audio
* 

### Các hàm liên quan.
```sh
tween.to({ x: 800 }, 5000, 'Linear', true, 0);
```

Khai báo style là 1 object:
```sh
var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
```

Thêm text vào game:
```sh
game.add.text(game.world.centerX - 300, 0, text, style);
```


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks)
