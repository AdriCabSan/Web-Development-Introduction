setTimeout(main, 10);
function main() {
    var test, i, start, end;
    var count = 1000000;

    start = window.performance.now();
    for(i=0; i<count; i++) {
        test = document.getElementById('test1');
        test.innerText = 'Speed Testing...'
    }
    end = window.performance.now();
    test.innerText = 'Speed of getElementById: ' + ((end - start)/1000).toFixed(2) + "sec.";

    start = window.performance.now();
    for(i=0; i<count; i++) {
         test = document.getElementsByTagName('p')[0];
        test.innerText = 'Speed Testing...'
    }
    end = window.performance.now();
    test.innerText = 'Speed of getElementsByTagNames: ' + ((end - start)/1000).toFixed(2) + "sec.";

    start = window.performance.now();
    for(i=0; i<count; i++) {
        test = document.getElementsByClassName('test')[0];
        test.innerText = 'Speed Testing...'
    }
    end = window.performance.now();
    test.innerText = 'Speed of getElementsByClassName: ' + ((end - start)/1000).toFixed(2) + "sec.";

    start = window.performance.now();
    for(i=0; i<count; i++) {
        test = document.querySelector('#test2');
        test.innerText = 'Speed Testing...'
    } 
    end = window.performance.now();
    test.innerText = 'Speed of querySelector: ' + ((end - start)/1000).toFixed(2) + "sec.";

    start = window.performance.now();
    for(i=0; i<count; i++) {
        $( "#jq1" ).text( 'Speed Testing...' );
    } 
    end = window.performance.now();
    $( "#jq1" ).text( 'Speed of jQuery: ' + ((end - start)/1000).toFixed(2) + "sec." );    
    
    document.getElementById('notes').innerHTML = 'Kindly copy & paste the output result to comment section, for comparison.<br/>Thank you for all the feedbacks, and also thanks for @Morpheus suggestion.'

}