import React from 'react'

const ReviewCard = (props) => {
const { review, index } = props;

  return (
    <>
    <div key={"review_"+index} 
    className="bg-white rounded-full shadow-neumorphic w-full max-w-md mx-auto px-6 py-4 flex items-center gap-4">
    <img src={review.profileImage} alt="Profile" className="w-16 h-16 rounded-full shadow-md"  />
    <div>
    <p className="text-gray-700 font-semibold">{review.author}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">★★★★★</span>
        <span className="text-gray-500">({review.rating} / 5)</span>
      </div>
      <p className="text-gray-600 text-sm">{review.comment}</p>
      {review.verifiedPurchase && <span className="text-green-500 text-xs">Verified Purchase</span>}
    </div>
  </div>
    </>
  )
}

export default ReviewCard