const countTotalFeedback = (...args) =>
  args.reduce((acc, value) => acc + value, 0);

export default countTotalFeedback;
