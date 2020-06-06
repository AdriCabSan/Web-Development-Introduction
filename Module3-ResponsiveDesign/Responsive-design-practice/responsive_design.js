$( ".element" ).html( $( ".module" ).width() );
$( ".browser" ).html( $( window ).width() );

$( window ).resize(function() {
  $( ".element" ).html( $( ".module" ).width() );
  $( ".browser" ).html( $( window ).width() );
});