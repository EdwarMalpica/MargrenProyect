import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Map, tileLayer, marker, Popup} from 'leaflet';
import { MarketMapSellerComponent } from '../market-map-seller/market-map-seller.component';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  map: Map;
  
  constructor(private resolver:ViewContainerRef) { }

  ngAfterViewInit() {
  
  const map = new Map('map').setView([5.5515, -73.35765], 18);
  tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }).addTo(map);
  const markerAd = marker([5.5515, -73.35765]).addTo(map);
  const markerAd1 = marker([5.5580, -73.35765]).addTo(map);
  const markerAd2 = marker([5.5515, -73.357]).addTo(map);
  const markerAd3 = marker([5.5400, -73.35800]).addTo(map);
  const component = this.resolver.createComponent(MarketMapSellerComponent);
  markerAd.bindPopup(component.location.nativeElement).openPopup();
  markerAd1.bindPopup(component.location.nativeElement).openPopup();
  markerAd2.bindPopup(component.location.nativeElement).openPopup();
  markerAd3.bindPopup(component.location.nativeElement).openPopup();
  }


  ngOnInit(): void {
  }

}
