using System;
using System.Collections.Generic;

//Составить инвентарную ведомость игрушек, включив следующие
//данные: название игрушки, ее стоимость (в руб.), возрастные грани-
//цы детей, для которых предназначена игрушка. Вывести в новый
//список информацию о тех игрушках, которые предназначены для де-
//тей от N до M лет, отсортировав их по стоимости.

namespace Z2
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Toy> toys = new List<Toy>
            {
                new Toy("Мишка", 25.90, 3, 18),
                new Toy("Кукла", 14.54, 5, 16),
                new Toy("Машинка", 35.19, 6, 20),
                new Toy("Мячик", 10.99, 3, 25),
                new Toy("Юла", 15.69, 5, 12),
            };

            Console.Write("Введите количество игрушек, которые вы хотите добавить в список: ");
            int n = Int32.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine($"Игрушка номер {i + 1}");

                Console.Write("Название: ");
                string name = Console.ReadLine();

                Console.Write("Цена: ");
                double price = double.Parse(Console.ReadLine());

                Console.Write("Минимальные возраст (лет): ");
                int minAge = Int32.Parse(Console.ReadLine());

                Console.Write("Максимальный возраст (лет): ");
                int maxAge = Int32.Parse(Console.ReadLine());

                Toy toy = new Toy(name, price, minAge, maxAge);
                toys.Add(toy);
            }
            toys.Sort();

            Console.Write("Введите минимальную границу возраста: ");
            int N = Int32.Parse(Console.ReadLine());

            Console.Write("Введите максимальную границу возраста: ");
            int M = Int32.Parse(Console.ReadLine());

            Console.WriteLine("\nИнформация до фильтрации: \n");
            Console.WriteLine("{0,-30}{1,-15}{2, -20}{3, -20}", "Название", "Цена", "Мин. возраст", "Макс. возраст");
            showToys(toys);

            List<Toy> correctToys = getCorrectToys(toys, N, M);
            correctToys.Sort();

            Console.WriteLine($"\nИнформация о игрушках, которые попадают в возрастные рамки от {N}(лет) до {M}(лет): \n");
            Console.WriteLine("{0,-30}{1,-15}{2, -20}{3, -20}", "Название", "Цена", "Мин. возраст", "Макс. возраст");
            showToys(correctToys);

        }

        static List<Toy> getCorrectToys(List<Toy> toys, int minAge, int maxAge)
        {
            List<Toy> correctToys = new List<Toy>();

            foreach(Toy toy in toys)
            {
                if (toy.checkYear(minAge, maxAge))
                {
                    correctToys.Add(toy);
                }
            }

            return correctToys;
        }

        static void showToys(List<Toy> toys)
        {
            foreach (Toy toy in toys)
            {
                Console.WriteLine(toy);
            }
        }
    }
}
