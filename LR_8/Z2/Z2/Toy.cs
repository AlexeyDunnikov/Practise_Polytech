using System;
using System.Collections.Generic;
using System.Text;

//Составить инвентарную ведомость игрушек, включив следующие
//данные: название игрушки, ее стоимость (в руб.), возрастные грани-
//цы детей, для которых предназначена игрушка. Вывести в новый
//список информацию о тех игрушках, которые предназначены для де-
//тей от N до M лет, отсортировав их по стоимости.

namespace Z2
{
    class Toy:IComparable
    {
        private string name;
        private double price;
        private int minAge;
        private int maxAge;

        public Toy(string name, double price, int minAge, int maxAge)
        {
            this.name = name;
            this.price = price;
            this.minAge = minAge;
            this.maxAge = maxAge;
        }

        public string getFormatPrice()
        {
            return price + "(BYN)";
        }

        public bool checkYear(int minAge, int maxAge)
        {
            return minAge > this.minAge && maxAge < this.maxAge;
        }

        public override string ToString()
        {
            return String.Format("{0,-30}{1,-15}{2, -20}{3, -20}", name, getFormatPrice(), minAge, maxAge);
        }

        public int CompareTo(object obj)
        {
            Toy toy;
            toy = (Toy)obj;
            return price.CompareTo(toy.price);
        }
    }
}
