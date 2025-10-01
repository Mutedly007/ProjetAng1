import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-event',
  standalone: false,
  templateUrl: './list-event.html',
  styleUrl: './list-event.css'
})
export class ListEvent {
  eventlist: Event[] = [
  {
    id: 1,
    titre: "Concert Jazz",
    description: "Un concert exceptionnel avec des artistes internationaux.",
    date: new Date("2025-10-15T20:00:00"),
    lieu: "Théâtre Municipal",
    prix: 50,
    organisateur: 101,
    imageUrl: "/Images/ticket.png",
    nbrplaces: 200,
    nbrlikes: 35
  },
  {
    id: 2,
    titre: "Conférence Tech IA",
    description: "Discussion autour des dernières tendances en intelligence artificielle.",
    date: new Date("2025-11-02T09:00:00"),
    lieu: "Centre de Congrès",
    prix: 0, // gratuit
    organisateur: 102,
    imageUrl: "/Images/ticket.png",
    nbrplaces: 500,
    nbrlikes: 120
  },
  {
    id: 3,
    titre: "Atelier Cuisine",
    description: "Apprenez à préparer des plats traditionnels tunisiens.",
    date: new Date("2025-12-05T14:30:00"),
    lieu: "Espace Culturel",
    prix: 25,
    organisateur: 103,
    imageUrl: "/Images/ticket.png",
    nbrplaces: 30,
    nbrlikes: 48
  },
  {
    id: 4,
    titre: "Marathon Carthage",
    description: "Une course sportive à travers les sites historiques.",
    date: new Date("2026-01-20T07:00:00"),
    lieu: "Carthage",
    prix: 10,
    organisateur: 104,
    imageUrl: "/Images/ticket.png",
    nbrplaces: 1000,
    nbrlikes: 300
  }
];
inclicks (event: Event) { 
  return event.nbrlikes++;
}

buy(event: Event) {
   return event.nbrplaces --;}

datexpired(event: Event) {
  console.log(event.date);
  return new Date(event.date) < new Date();
}
}

