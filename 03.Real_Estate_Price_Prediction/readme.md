### Bengaluru House Price Prediction
## Project Description
This project focuses on predicting house prices in Bengaluru using machine learning techniques. The dataset used for analysis is sourced from the official NYC government website and contains comprehensive details on house prices collected by the Bengaluru House Data Commission. The project encompasses various stages such as data preprocessing, feature engineering, outlier detection, and model training.

## Key Steps:

# Data Preprocessing:
Removed unnecessary columns like 'area_type', 'availability', 'society', and 'balcony'.
Addressed missing values using techniques such as dropping rows with missing data and filling missing values.

# Feature Engineering:
Extracted the number of bedrooms (BHK) from the 'size' column.
Converted categorical location data to numerical format using LabelEncoder.

# Outlier Detection and Removal:
Detected outliers in the 'price_per_sqft' column using standard deviation method.
Removed outliers and ensured data quality by setting a threshold.

# Model Training:
Utilized Linear Regression for initial model training.
Split the dataset into training and testing sets using train_test_split.
Evaluated model performance using the R-squared metric.

## Technologies Used:
Python
Pandas
NumPy
Matplotlib
Seaborn
Scikit-Learn

## Conclusion:
This project provides insights into the Bengaluru housing market and offers a predictive model for estimating house prices. Further enhancements and model optimizations can be explored to improve prediction accuracy and robustness.


## Software And tools Requirements

1. [Github Account](https://github.com)
2. [VSCodeIDE](https://code.visualstudio.com/)
3. [AZURE](https://www.azure.com) - Used to deploy the project