import {Component, OnInit} from '@angular/core';
import {Item} from "../../model/Item";
import {ItemService} from "../../service/item.service";
import {map} from "rxjs";

@Component({
  selector: 'app-item-frame',
  templateUrl: './item-frame.component.html',
  styleUrls: ['./item-frame.component.css']
})
export class ItemFrameComponent implements OnInit {
  public itemsFromDb: Item[] = [];

  constructor(private itemService: ItemService) {
    this.itemService = itemService;
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    // this.itemService.getItems().subscribe(items => this.itemsFromDb = items);
    this.itemService.getItems()
      // .pipe(map(item => (Math.round(item.price * 100) / 100).toFixed(2)))
      .subscribe(items => this.itemsFromDb = items);


    //
    // this.itemsFromDb.map(item => {
    //   return item.price.toFixed(2);
    // });
  }
}
