import AWS from "aws-sdk";
AWS.config.update({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB();

export const fetchDynamoDBRecords = async () => {
  try {
    const params = {
      TableName: process.env.NEXT_PUBLIC_AWS_TABLENAME,
    };

    const data = await dynamodb.scan(params).promise();
    const records = data.Items.map((item) =>
      AWS.DynamoDB.Converter.unmarshall(item)
    );

    return records;
  } catch (error) {
    console.error("Error fetching DynamoDB records:", error);
    return [];
  }
};

export const fetchDynamoDbRecord = async (Blogid, title) => {
  try {
    const params = {
      TableName: process.env.NEXT_PUBLIC_AWS_TABLENAME,
      Key: { BlogID: { S: Blogid }, Title: { S: title } },
    };

    const data = await dynamodb.getItem(params).promise();
    const record = AWS.DynamoDB.Converter.unmarshall(data.Item);

    return record;
  } catch (error) {
    console.error("Error fetching DynamoDB record:", error);
    return {};
  }
};
