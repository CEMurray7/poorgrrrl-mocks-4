const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
? 'pk_test_TjHb4HE0aeU2Lw2QxQJeBITu'
: 'sk_test_aR615F2U8m5pTSof7HUQCwpp';
const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
