const pool = require("./db");

const getAllReviewsSQL = `
  SELECT
    reviews.id,
    reviews.stars,
    reviews.variety,
    countries.country,
    packaging_styles.packaging_style,
    brands.brand
  FROM
    reviews
  JOIN
    countries
  ON
    reviews.country_id = countries.id
  JOIN
    packaging_styles
  ON
    reviews.packaging_style_id = packaging_styles.id
  JOIN
    brands
  ON
    reviews.brand_id = brands.id;`;

const ramenReviews = {
  getAllReviews: async () => {
    try {
      const { rows } = await pool.query(getAllReviewsSQL);
      return rows;
    } catch (e) {
      console.error(`Database query failed: ${e.message}`);
      throw Error(`Database query failed: ${e.message}`);
    }
  },
};

module.exports = ramenReviews;
