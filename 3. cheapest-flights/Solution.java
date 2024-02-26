public class Solution {
    public static void main(String[] args) throws Exception {
        // Test case 1
        int[][] flights1 = {{0, 1, 100}, {1, 2, 100}, {2, 0, 100}, {1, 3, 600}, {2, 3, 200}};
        System.out.println("Actual: " + findCheapestPrice(4, flights1, 0, 3, 1) + ", Expected: 700");

        // Test case 2
        int[][] flights2 = {{0, 1, 100}, {1, 2, 100}, {2, 0, 100}, {1, 3, 600}, {2, 3, 200}};
        System.out.println("Actual: " + findCheapestPrice(4, flights2, 0, 3, 0) + ", Expected: -1");

        // Test case 3
        int[][] flights3 = {{0, 1, 100}, {1, 2, 100}, {0, 2, 500}};
        System.out.println("Actual: " + findCheapestPrice(3, flights3, 0, 2, 0) + ", Expected: 500");
    }

    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // add your solution here
    }
}