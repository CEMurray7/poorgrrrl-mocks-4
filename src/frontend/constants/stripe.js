const STRIPE_PUBLISHABLE = process.env.NODE_ENV ===
'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_TjHb4HE0aeU2Lw2QxQJeBITu';

export default STRIPE_PUBLISHABLE;
