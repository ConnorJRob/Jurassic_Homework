const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur_1;
  let dinosaur_2;
  let dinosaur_3;

  beforeEach(function () {
    dinosaur_1 = new Dinosaur("Stegosauras", "Herbivore", 25);
    dinosaur_2 = new Dinosaur("T-Rex", "Carnivore", 60);
    dinosaur_3 = new Dinosaur("Triceratops", "Herbivore", 35);
    park = new Park("Isla Nublar", 300, [dinosaur_1, dinosaur_2, dinosaur_3]);
  })

  it('should have a name', function(){
    assert.deepStrictEqual(park.park_name, "Isla Nublar")
  });

  it('should have a ticket price', function(){
    assert.deepStrictEqual(park.ticket_price, 300)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collection_of_dinosaurs, [dinosaur_1, dinosaur_2, dinosaur_3])
  });

  it('should be able to add a dinosaur to its collection',function(){
    const new_dino = Dinosaur("Velociraptor","Carnivore",40);
    park.addDinosaur(new_dino);
    assert.deepStrictEqual(park.collection_of_dinosaurs, [dinosaur_1, dinosaur_2, dinosaur_3, new_dino])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur_2);
    number_of_attractions = park.collection_of_dinosaurs.length;
    assert.deepStrictEqual(number_of_attractions, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    best_dino = park.mostPopularDino()
    best_dino_species = best_dino.species
    assert.deepStrictEqual(best_dino_species, "T-Rex")
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    dinosaur_4 = new Dinosaur("Stegosauras", "Herbivore", 25);
    dinosaur_5 = new Dinosaur("Stegosauras", "Herbivore", 25);
    dinosaur_6 = new Dinosaur("Velociraptor", "Carnivore", 40);
    park.addDinosaur(dinosaur_4);
    park.addDinosaur(dinosaur_5);
    park.addDinosaur(dinosaur_6);
    species_to_search = "Stegosauras"
    matching_dinos = park.findBySpecies(species_to_search);
    assert.deepStrictEqual(matching_dinos, [dinosaur_1, dinosaur_4, dinosaur_5]);
  });

  it('should be able to calculate the total number of visitors per day', function(){;
    visitors_per_day = park.visitorsPerDay();
    assert.deepStrictEqual(visitors_per_day, 120)
  });

  it('should be able to calculate the total number of visitors per year', function(){;
    const working_days_2021 = 250;
    visitors_per_day = park.visitorsPerDay();
    visitors_per_year = visitors_per_day * working_days_2021;
    assert.deepStrictEqual(visitors_per_year, 30000);
  });

  it('should be able to calculate total revenue for one year', function(){;
    const working_days_2022 = 250;
    visitors_per_day = park.visitorsPerDay();
    visitors_per_year = visitors_per_day * working_days_2022;
    predicted_2022_revenue = visitors_per_year * park.ticket_price;
    assert.deepStrictEqual(predicted_2022_revenue, 9000000)
  });
});