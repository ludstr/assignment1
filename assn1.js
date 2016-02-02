/**
 * Created by louuu on 2016-02-01.
 */


function myFunction() {
    document.getElementById("demo").style.color = "red";
    var movies = db.collection('movies');
    movies.insert({name: 'Bba movie', year: 1992, genre: '23', rating: 10});
}

function connecting(){
    var mongodb = require('mongodb');

    var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:27017/ASSIGNMENT1';

    MongoClient.connect(url, function (err, db) {

        if (err) {

            console.log('SOME ERROR: ', err);


        } else {

            console.log('Worked pls.', url);

            //things and stuff
            var movies = db.collection('movies');
            movies.insert({name: 'Bba movie', year: 1992, genre: '23', rating: 10});
            //db.movies.insert({name: 'ccc movie', year: 1992, genre: '23', rating: 10});
            //db.movies.insert({name: 'ccc movie', year: 1992, genre: '23', rating: 10});

            //db.close();

        }


    });

}
    //things and stuff
    //var movies = db.collection('movies');





