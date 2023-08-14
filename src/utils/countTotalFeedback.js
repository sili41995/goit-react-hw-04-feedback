const countTotalFeedback = (...args) => {
  let feedbacks = 0;
  for (const arg of args) {
    feedbacks += arg;
  }
  return feedbacks;
};

export default countTotalFeedback;
