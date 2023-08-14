const countPositiveFeedbackPercentage = (totalFeedback, targetFeedbacks) => {
  const positivePercentage = Math.round(
    (100 / totalFeedback) * targetFeedbacks
  );
  return positivePercentage ? positivePercentage : 0;
};

export default countPositiveFeedbackPercentage;
