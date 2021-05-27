import React from 'react';

const CategoryCard = ({totalHome, totalTravel, totalFood, totalMedia, totalBars}) => {

    const sumTotals = (totals) => {
        if(totals.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return totals.reduce(reducer);
        } else {
          return 0;
        }
      }
           let sumHome = sumTotals(totalHome);
           let sumTravel = sumTotals(totalTravel);
           let sumFood = sumTotals(totalFood);
           let sumMedia = sumTotals(totalMedia);
           let sumBars = sumTotals(totalBars);
    
          const data = [
            { name: 'Home & Utilities', value: sumHome },
            { name: 'Travel', value: sumTravel},
            { name: 'Food & Groceries', value: sumFood },
            { name: 'Media', value: sumMedia },
            { name: 'Bars & Restaurants', value: sumBars},
          ];

        const topExpense = Math.max.apply(Math, data.map(function(el) { return el.value; }));
        const topCategoryObject = data.find(el => el.value === topExpense);
        const topCategory = Object.values(topCategoryObject.name).join('');
    


    return (
        <div className="category-card-container">
            <p className="statement">Top Category</p>
            <p className="top-category">{topCategory}</p>
        </div>
    );
}

export default CategoryCard;