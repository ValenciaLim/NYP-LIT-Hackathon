function expandNav() {
    var x = document.querySelector(".allLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

async function getListings() {
    const response = await fetch('assets/data/listings.json');
    const listings = await response.json() 
    return listings
}

document.addEventListener('DOMContentLoaded', async() => {
    const listings = await getListings();
    var vertical_img_buttons = document.getElementsByClassName("vertical-img-buttons")[0];
    listings.forEach((listing, index) => {
        if (listing.transactionType == "Sales"){
            var imgDiv = document.createElement("div");
            var shadowDiv = document.createElement("div");
            shadowDiv.classList.add("shadow");
            shadowDiv.addEventListener("click", function(){selectListing(listing.id, "sales")}, false)
            imgDiv.appendChild(shadowDiv);
            var img = document.createElement("img");
            img.src = listing.cover;
            imgDiv.appendChild(img);
            vertical_img_buttons.appendChild(imgDiv);
        }
    })

    document.getElementById("slide-img-sales").src = listings[0].cover;
    document.getElementById("address-sales").innerText = listings[0].address;
    document.getElementById("price-sales").innerText = listings[0].price;
    document.getElementById("type-sales").innerText = listings[0].type;
    document.getElementById("district-sales").innerText = listings[0].district;
    document.getElementById("floor-sales").innerText = listings[0].floor;
    document.getElementById("area-sales").innerText = listings[0].sqft;
    document.getElementById("bed-sales").innerText = listings[0].bed;
    document.getElementById("bath-sales").innerText = listings[0].bath;
    document.getElementById("psf-sales").innerText = listings[0].psf;
})

async function selectListing(index, transactionType){
    const listings = await getListings();
    var listing = listings[index-1];
    document.getElementById("slide-img-"+transactionType).src = listing.cover;
    document.getElementById("address-"+transactionType).innerText = listing.address;
    document.getElementById("price-"+transactionType).innerText = listing.price;
    document.getElementById("type-"+transactionType).innerText = listing.type;
    document.getElementById("district-"+transactionType).innerText = listing.district;
    document.getElementById("floor-"+transactionType).innerText = listing.floor;
    document.getElementById("area-"+transactionType).innerText = listing.sqft;
    document.getElementById("bed-"+transactionType).innerText = listing.bed;
    document.getElementById("bath-"+transactionType).innerText = listing.bath;
    document.getElementById("psf-"+transactionType).innerText = listing.psf;
    
}

async function getRentListings(){
    const listings = await getListings();
    var vertical_img_buttons = document.getElementsByClassName("vertical-img-buttons")[1];
    count = 0;
    listings.forEach((listing, index) => {
        if (listing.transactionType == "Rent"){
            count += 1;
            var imgDiv = document.createElement("div");
            var shadowDiv = document.createElement("div");
            shadowDiv.classList.add("shadow");
            shadowDiv.addEventListener("click", function(){selectListing(listing.id, "rent")}, false)
            imgDiv.appendChild(shadowDiv);
            var img = document.createElement("img");
            img.src = listing.cover;
            imgDiv.appendChild(img);
            vertical_img_buttons.appendChild(imgDiv);
        }
    });
    
    document.getElementById("sales").style.display = "none";
    document.getElementById("rent").style.display = "flex";
    document.getElementById("salesBtn").classList.remove("active");
    document.getElementById("rentBtn").classList.add("active");

    if(count == 0){
        document.getElementById("slide-img-rent").style.visibility = "hidden";
    }
    else {
        document.getElementById("slide-img-rent").style.visibility = "visible";
        document.getElementById("slide-img-rent").src = listings[0].cover;
        document.getElementById("address-rent").innerText = listings[0].address;
        document.getElementById("price-rent").innerText = listings[0].price;
        document.getElementById("type-rent").innerText = listings[0].type;
        document.getElementById("district-rent").innerText = listings[0].district;
        document.getElementById("floor-rent").innerText = listings[0].floor;
        document.getElementById("area-rent").innerText = listings[0].sqft;
        document.getElementById("bed-rent").innerText = listings[0].bed;
        document.getElementById("bath-rent").innerText = listings[0].bath;
        document.getElementById("psf-rent").innerText = listings[0].psf;
    }
}

async function getSalesListings(){
    const listings = await getListings();
    var vertical_img_buttons = document.getElementsByClassName("vertical-img-buttons")[0];
    listings.forEach((listing, index) => {
        if (listing.transactionType == "Rent"){
            var imgDiv = document.createElement("div");
            var shadowDiv = document.createElement("div");
            shadowDiv.classList.add("shadow");
            shadowDiv.addEventListener("click", function(){selectListing(listing.id, "sales")}, false)
            imgDiv.appendChild(shadowDiv);
            var img = document.createElement("img");
            img.src = listing.cover;
            imgDiv.appendChild(img);
            vertical_img_buttons.appendChild(imgDiv);
        }
    });

    document.getElementById("rent").style.display ="none";
    document.getElementById("sales").style.display = "flex";
    document.getElementById("rentBtn").classList.remove("active");
    document.getElementById("salesBtn").classList.add("active");

    document.getElementById("slide-img-sales").src = listings[0].cover;
    document.getElementById("address-sales").innerText = listings[0].address;
    document.getElementById("price-sales").innerText = listings[0].price;
    document.getElementById("type-sales").innerText = listings[0].type;
    document.getElementById("district-sales").innerText = listings[0].district;
    document.getElementById("floor-sales").innerText = listings[0].floor;
    document.getElementById("area-sales").innerText = listings[0].sqft;
    document.getElementById("bed-sales").innerText = listings[0].bed;
    document.getElementById("bath-sales").innerText = listings[0].bath;
    document.getElementById("psf-sales").innerText = listings[0].psf;
}