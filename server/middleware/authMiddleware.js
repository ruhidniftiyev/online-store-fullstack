module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.autharization.split(' ')[1];
  } catch (error) {
    res.status(401).json({ message: 'Ne avtorizovan!' });
  }
};
