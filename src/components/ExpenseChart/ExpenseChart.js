import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#6600FF" ];


const ExpenseChart = ({totalHome, totalTravel, totalFood, totalMedia, totalBars}) => {

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
        { name: 'Home', value: sumHome },
        { name: 'Travel', value: sumTravel},
        { name: 'Food', value: sumFood },
        { name: 'Media', value: sumMedia },
        { name: 'Bars', value: sumBars},
      ];

    return (
    <PieChart width={240} height={240}>
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
         {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie>
      </PieChart>
    );
}

export default ExpenseChart;