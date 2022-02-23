import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PhotoService} from '../../services/photo.service';
import {AdService} from "../../services/ad.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  public formGroupPhotos: FormGroup;
  public orders: any[];

  advertisementForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    photos: new FormControl([]),
    price: new FormControl(0)
  });
  isLogin = false;
  constructor( private formBuilder: FormBuilder, private photoService: PhotoService, private adService: AdService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.isLogin = Boolean(this.getCookie('isLogin'));
    this.orderService.orders$.subscribe((res) => (this.orders = res));
    this.formGroupPhotos = this.formBuilder.group({
      photos: [[]],
    });
  }

  loginSubmit(): void{
    if (this.loginForm.value.name === 'admin' && this.loginForm.value.password === 'admin'){
      this.setCookie('isLogin', 'true', 1);
      this.isLogin = Boolean(this.getCookie('isLogin'));
    }
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = ''): void {
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  private getCookie(name: string): string {
    const ca = document.cookie.split(';');
    const caLen = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
  onSelect(event): void {
    event.addedFiles.forEach((item) => {
        this.photoService.savePhoto(item).subscribe((res) => {
          item.id = res;
          this.formGroupPhotos.controls.photos.value.push(item);
        });
    });
  }

  async onRemove(event): Promise<void> {
    await this.photoService.deletePhoto(event.id).toPromise();
    this.formGroupPhotos.controls.photos.value.splice(
      this.formGroupPhotos.controls.photos.value.indexOf(event),
      1
    );
  }

  addPhotoToAd(): void {
    this.formGroupPhotos.controls.photos.value.forEach((item) => {
      this.advertisementForm.controls.photos.value.push(item.id);
    });
  }

  createAd(): void {
    this.addPhotoToAd();
    this.adService
      .createAd(this.advertisementForm.getRawValue()).subscribe();
    this.advertisementForm.setValue({title: '', description: '', photos: [], price: 0});
    this.formGroupPhotos.setValue({photos: []});
  }
}
