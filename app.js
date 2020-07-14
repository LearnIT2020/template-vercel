/*!
 * template-vercel
 *
 * Copyright 2020 learn it 2020
 */ 

let Util = {
  searchZipCode : async function ( zipCode ) {
    // url
    console.log(document.location.host);
    let url = document.location.href + ".netlify/functions/serverless";
    if ( document.location.host.indexOf('.vercel.app') != -1 ) {
      url = document.location.href + "api/serverless";
    }
    else if ( document.location.host.indexOf('.gitpod.io') != -1 ) {
      url = document.location.href + "serverless";
    }

    // search
    const search_zip_res = await fetch(url, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({"type": "zip",
                            "zip": zipCode})
    });
    const search_zip_res_json = await search_zip_res.json();
    if( !search_zip_res.ok ) {
      throw new Error("Failed to get search result.");        
    }

    return search_zip_res_json;
  }
};

// after DOM contents are loaded
window.addEventListener( "DOMContentLoaded", function() {
  // setup 

  // Execute Zip Search
  const actionClickExecuteZipSearch = async ( event ) => {
    console.log( "Execute Zip Search button clicked." );
    let searchZip = document.getElementById( "txtSearchZip" );

    let result = await Util.searchZipCode(searchZip.value);

    let zip = document.getElementById( "txtZip" );
    let prefecture = document.getElementById( "txtPrefecture" );
    let city = document.getElementById( "txtCity" );
    let town = document.getElementById( "txtTown" );

    if ( result.zip && result.prefecture && result.city && result.town ) {
      zip.value = result["zip"];
      prefecture.value = result["prefecture"];
      city.value = result["city"];
      town.value = result["town"];
    }
  };
  let btnExecZipSearch = document.getElementById( "btnExecZipSearch" ); 
  btnExecZipSearch.addEventListener( "click", actionClickExecuteZipSearch, false );

});


