// Add your co
function submitData( dogName, dogBreed ) {
    return fetch( 'http://localhost:3000/dogs', {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
        dogName,
        dogBreed
      })
    })
    .then( function(response){
        return response.json()
    } )
    .then(function (object) {
        console.log(object)
        // document.body.innerHTML = object["id"]
    } )
    .catch(function (error ){
        // document.body.innerHTML = error.message
    })
}
function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }