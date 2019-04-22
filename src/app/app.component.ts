import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sweet-app';

  public data = [{
    id: 0,
    name: 'NAME1',
    // tslint:disable-next-line:max-line-length
    content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'http://pluspng.com/img-png/burger-png-free-icons-png-hamburger-burger-png-image-1000.png',
    price: '20.000'
  },
  {
    id: 1,
    name: 'NAME2',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
     img: 'http://thegermandeli.com/communities/4/000/002/021/004//images/12881906_639x365.png',
     price: '25.000'
  },
  {
    id: 2,
    name: 'NAME3',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'https://unixtitan.net/images/burrito-clipart-food-spanish-6.png',
    price: '15.000'
  },
  {
    id: 3,
    name: 'NAME4',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'http://pluspng.com/img-png/png-meal-fish-fillet-meal-555.png',
    price: '30.000'
  },
  {
    id: 4,
    name: 'NAME5',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'https://mypiada.com/sites/55f0b363e694aa54ff000001/theme/images/slide-mini-pasta.png?1555514677',
    price: '17.000'
  },
  {
    id: 5,
    name: 'NAME6',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1e0.png',
    price: '18.000'
  },
  {
    id: 6,
    name: 'NAME7',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'http://pluspng.com/img-png/png-meal-fish-fillet-meal-555.png',
    price: '30.000'
  },
  {
    id: 7,
    name: 'NAME8',
     // tslint:disable-next-line:max-line-length
     content: 'Angular Bootstrap cards are components which display content build of different elements with characteristic shadows, depth and hover effects.',
    img: 'http://los3golpes.com/wp-content/uploads/2018/06/Grilled-Food-PNG-File.png',
    price: '25.000'
  }];

}
