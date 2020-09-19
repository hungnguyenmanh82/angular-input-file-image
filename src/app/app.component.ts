import { Component, OnInit } from '@angular/core';
//$: là namespace
import * as $ from 'jquery';

// abc: là namespace
// import * as abc from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // khai báo kiểu javascript
  editor: any;
  ngOnInit() {
    //innerHTML
    $('#preview-native').html('ai la tri ky? cô đơn là gì? hạnh phúc có điều kiện?');
    //
    // abc('#preview-native').html('ai la tri ky? cô đơn là gì? hạnh phúc có điều kiện?');

    //
    // $('#logo').css('opacity', '0');
    $('#button-file').on('click', (e) => {
      // e.preventDefault(); // dùng cho <a> để ngăn nó kích hoạt
      $('#image').trigger('click');
    });
  }

  // nếu gặp lỗi kiểu thì để là 'any'
  imageUrlBase64: any;

  handleFileInput(files: FileList) {
    const file: File = files.item(0);

    $('#preview-native').html(file?.name);
    const reader: FileReader = new FileReader();

    // đây là hàm asynchronous nhận data
    reader.onload = () => {
      this.imageUrlBase64 = reader.result;
    };

    //file này đc đọc asynchronous trả về ở reader.onload function pointer
    reader.readAsDataURL(file);

    // reader.readAsArrayBuffer(file);
    // reader.readAsBinaryString(file);
    // reader.readAsText(file);
    // còn cách khác là dùng formData để upload dữ liệu lên server theo chuẩn (Springboot hỗ trợ phía server)
  }
}
