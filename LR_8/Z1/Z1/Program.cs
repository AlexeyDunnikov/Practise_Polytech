using System;

interface Ix
{
    void IxF0(int num);
    void IxF1();
}
interface Iy
{
    void F0(int num);
    void F1();
}
interface Iz
{
    void F0(int num);
    void F1();
}

namespace Z1
{
    class TestClass : Ix, Iy, Iz
    {
        int w;

        public void IxF0(int num)
        {
            w = 7 * num - 4;
            Console.WriteLine($"Метод IxF0, 7w - 4: {w}");
        }

        public void IxF1()
        {
            w = 7 * w - 4;
            Console.WriteLine($"Метод IxF1, 7w - 4: {w}");
        }

        public void F0(int num)
        {
            w = num * 3;
            Console.WriteLine($"Метод F0, w * 3: {w}");
        }

        public void F1()
        {
            w = w * 3;
            Console.WriteLine($"Метод F1, w * 3: {w}");
        }

        void Iz.F0(int num)
        {
            w = 6 + num;
            Console.WriteLine($"Метод Iz.F0, 6 + w: {w}");
        }

        void Iz.F1()
        {
            w = 6 + w;
            Console.WriteLine($"Метод Iz.F1, 6 + w: {w}");
        }

        public void IzF0(int num)
        {
            Iz obj = this;
            obj.F0(num);
        }

        public void IzF1()
        {
            Iz obj = this;
            obj.F1();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int n = 10;

            TestClass testObj = new TestClass();
            testObj.IxF0(n);
            testObj.IxF1();
            testObj.IzF1();
            testObj.IzF0(n);
            testObj.F0(n);
            testObj.F1();

            Iz iz;
            iz = testObj;
            iz.F1();
        }
    }
}
