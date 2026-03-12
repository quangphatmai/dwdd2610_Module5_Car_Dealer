import {reviews} from "../data/reviews.js";

console.log(reviews);
console.log("Hello World!");

const myNav = document.querySelector("#myNav");
const myMenuButton = document.querySelector("#myMenuButton");

myMenuButton.addEventListener("click", () => {
    myNav.classList.toggle("open")
    myMenuButton.classList.toggle("open")
})


const customerReviewsContainer = document.querySelector("#customer_reviews");

reviews.forEach(review => {
    const reviewCard = document.createElement("div")
    reviewCard.classList.add("review-card");

    // create and add the reviewer's name to the review card
    const reviewerName = document.createElement("h3")
    reviewerName.textContent = review.reviewer_name;
    reviewCard.appendChild(reviewerName);


    // create and add the star rating container to the review card
    const starRatingContainer = document.createElement("div")
    starRatingContainer.classList.add("star-rating-container")
    const starRatingLabel = document.createElement("span")
    starRatingLabel.textContent = "Rating: "
    starRatingContainer.appendChild(starRatingLabel)
    reviewCard.appendChild(starRatingContainer);


    // create and add the star rating to the review card
    for (let i = 1; i < review.star_rating + 1; i++) {
        const ratingStar = document.createElement("img")
        ratingStar.src = "../svg-logo/star-svgrepo-com.svg"
        ratingStar.alt = "Star Rating"
        ratingStar.classList.add("star-rating")
        starRatingContainer.appendChild(ratingStar)
    }


    //create and add the review text to the review card
    const reviewText = document.createElement("p")
    reviewText.textContent = review.review_text
    reviewCard.appendChild(reviewText);


    // add the review card to the customer reviews container
    customerReviewsContainer.appendChild(reviewCard);
})

