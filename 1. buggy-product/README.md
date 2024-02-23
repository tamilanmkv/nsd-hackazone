Team A at company Z has the responsibility of adding new features and bug fixes for a popular product. The team comprises only developers who write unit tests and integration tests for the features they ship. Since there were no testers in the team, all changes were deployed without additional testing. One fine morning, one of their clients decided to upgrade from version '7' to the latest released version. They noticed a bug that hindered their workflow. The client notified the product owner about the issue and a new tester was brought in from another team to identify when the bug was introduced. The tester did manual testing of all the releases from '0' to 'n'(where 'n' is the latest version) to see if the bug was present in it. The tester then gave a list to the developers who now have to decide from which version the bug crept in. Write a function that identifies the last bug-free version optimally.

## Java

```
// versions would be a 1D array with either '0' or '1' as its elements.
// '0' indicates the version is bug-free and '1' indicates the version is buggy.
// (Ex - For input [0, 0, 1, 1, 1], the bug was introduced in version 2 and the function should return 1)

public class Challenge {
    /**
     * The main entry point.
     * Don't change the code, besides the input to the function.
     */
    public static void main(String[] args) throws Exception {
        lastBugFreeVersion(new int[]{0, 0, 1, 1, 1});
    }

    public static int lastBugFreeVersion(int[] versions) {
        // Your implementation here
    }
}
```

Run your Java code:

```
javac Challenge.java
java Challenge
```

## JavaScript

```
// versions would be a 1D array with either '0' or '1' as its elements.
// '0' indicates the version is bug-free and '1' indicates the version is buggy.
// (Ex - For input [0, 0, 1, 1, 1], the bug was introduced in version 2 and the function should return 1)

function lastBugFreeVersion(versions) {
    // Your implementation here
}

```

Run your JavaScript code:

```
node Challenge.js
```
