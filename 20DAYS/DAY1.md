# DAY 1: Tổng quan, cài đặt, Một số tính năng cơ bản.

Đầu tiên thì xem qua phần công cụ để biết đường đi nước bước từ đầu đến cuối:

### Các công cụ cần thiết để thực hiện các dự án trong 20 ngày:
* [Physics Editor] - Not FREE - Cái này giống như để tạo 1 physics cho hình ảnh của chúng ta. Chúng ta import hình ảnh vào thêm (filter,...) rồi export ra JSON (tuy nhiên cái này không hỗ trợ định dạng đó) tương ứng dùng trong code Javascript của chúng ta.
Do đó phải tham khảo cái này [Export Physic Editor to JSON],
* [Texture Packer] - Hỗ trợ chúng ta gom multi sprite vào, compress file,....nói chung là khá nhiều. Và hỗ trợ cả Phaser.
Coi thêm: [Sử dụng TExture Atlas với Texture Packer]
* [Tiled Map Editor] - Tạo Map cho game thành những phần nhỏ (Tile)
* [Shoe Box] - Cũng hỗ trợ tạo Texture Alias nhưng chưa check thử - vì không thấy chỗ support Phaser (chỉ support HTML5 và 1 số Engine khác).
* [CocoonJS] - Build sang Android, IOS,... sử dụng online, hơi khó control. Mỗi lần dc 2 dự án build online trên đó.
* [Cordova] - Build sang Android, IOS,... Cài đặt và nắm cấu hình để build.

# Khởi tạo Project
* Cần phải chạy giao thức http (ví 1 số lý do bảo mật của trình duyệt).
* Cần chạy server, có nhiều cách:

Sử dụng Apache (Xampp, Wampp),

chạy NodeJS server: live-server, http-server.

Sử dụng Grunt hoặc Gulp.

HTTP Server sử dụng Python.

# Một số kiến thức và câu hỏi:
* Game - Manages booting, creating subsystems and running the logic and render loop.
* World -The Game World in which all Game Objects live.
* Camera - The Camera is your view into the Game World.
* Stage	- is the root display object.
--------------
* Tìm hiểu thêm trong API về các định nghĩa khác, ở đây sẽ đặt câu hỏi:
* World trong Phaser là gì?
* hàm anchor.SetTo(0.5,0.5) có tác dụng gì?

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks)

[Physics Editor]: <https://www.codeandweb.com/physicseditor>
[Export Physic Editor to JSON]: <https://github.com/melonjs/melonJS/wiki/How-to-load-PhysicEditor-Shapes-into-your-project>
[Texture Packer]: <https://www.codeandweb.com/texturepacker>
[Sử dụng TExture Atlas với Texture Packer]: <https://github.com/melonjs/melonJS/wiki/How-to-use-Texture-Atlas-with-TexturePacker>
[Tiled Map Editor]: <http://www.mapeditor.org/>
[Shoe Box]: <http://renderhjs.net/shoebox/>
[CocoonJS]: <https://cocoon.io/>
[Cordova]: <https://cordova.apache.org/>
