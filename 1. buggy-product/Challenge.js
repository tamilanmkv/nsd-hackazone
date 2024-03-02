// case 1 : first find the last bug free version and store the index
// case 2 : then find the previous bug free version
// example : [0, 0, 1, 1, 1]
// case 3 : what if contain next bug free version after previous is buggy version
// example : [0, 0, 1, 0, 1]
// case 4 : what if there is no previous bug free version return null
// example : [1, 1, 1, 1, 1]




function lastBugFreeVersion(versions) {
  const lastBugFreeVersion = versions.filter((x, i) =>
    x === 0 ? i : null,
  ).length;

  return versions.filter((x) => x === 1 && lastBugFreeVersion).length;
}

// versions would be a 1D array with either '0' or '1' as its elements.
// lastBugFreeVersion([0, 0, 1, 1, 1]);
lastBugFreeVersion([0, 0, 1, 1, 1]);

