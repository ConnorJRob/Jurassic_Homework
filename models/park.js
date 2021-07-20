const Park = function(park_name, ticket_price, collection_of_dinosaurs){
    this.park_name = park_name;
    this.ticket_price = ticket_price;
    this.collection_of_dinosaurs = collection_of_dinosaurs;
    }

    Park.prototype.addDinosaur = function(dinosaur){
        this.collection_of_dinosaurs.push(dinosaur);
        }

    Park.prototype.removeDinosaur = function(){
        this.collection_of_dinosaurs.pop();
        }

    Park.prototype.removeHippy = function(){
        this.collection_of_dinosaurs.pop();
        }

    Park.prototype.mostPopularDino = function(){
        let best_dino;
        let visitor_rate = 0;
        for (const dino of this.collection_of_dinosaurs) {
            if (dino.guestsAttractedPerDay > visitor_rate) {
                best_dino = dino;
                visitor_rate = dino.guestsAttractedPerDay;
            }
        }
        return best_dino
    }

    Park.prototype.findBySpecies = function(species){
        let dinos_matching_species_provided = []
        for (const dino of this.collection_of_dinosaurs) {
            if (dino.species === species) {
                dinos_matching_species_provided.push(dino);
        }
    }
    return dinos_matching_species_provided
    }

    Park.prototype.visitorsPerDay = function(){
        total_daily_visitors = 0;
        for (const dino of this.collection_of_dinosaurs){
            total_daily_visitors += dino.guestsAttractedPerDay;
        }
        return total_daily_visitors
    }

module.exports = Park;
