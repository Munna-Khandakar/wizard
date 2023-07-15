To create a database in MongoDB Atlas and obtain the connection URL for Node.js, follow these steps:

1. Sign in to MongoDB Atlas: Go to the MongoDB Atlas website (https://www.mongodb.com/cloud/atlas) and sign in to your account. If you don't have an account, you can create one for free.

2. Set up a new cluster: Once you're logged in, click on the "Build a Cluster" button to create a new cluster. Follow the prompts to choose your preferred cloud provider, region, and cluster configuration. You can choose the free tier (M0) or select a different configuration based on your needs.

3. Configure security settings: After creating the cluster, navigate to the "Database Access" tab under the "Security" section in the left-hand menu. Click on the "Add New Database User" button to create a new user. Provide a username and password for the user and make sure to grant it appropriate privileges.

4. Set up network access: In the same "Security" section, click on the "Network Access" tab. Then, click the "Add IP Address" button to allow your IP address to connect to the cluster. Alternatively, you can choose to allow access from anywhere by adding `0.0.0.0/0` as the IP address.

5. Obtain connection string: Go back to the "Clusters" view and click on the "Connect" button for the cluster you created. Select "Connect your application" as the connection method.

6. Choose driver and version: In the "Connect to your application" dialog, select the Node.js driver version you want to use.

7. Copy the connection string: You will see a connection string displayed on the screen. Click the "Copy" button to copy the connection string to your clipboard.

Here's an example of a connection string:

```
mongodb+srv://<username>:<password>@cluster0.example.net/<dbname>?retryWrites=true&w=majority
```

Make sure to replace `<username>`, `<password>`, and `<dbname>` with the appropriate values you set when creating the database user.

Now, with the connection URL in hand, you can use it in your Node.js application to connect to your MongoDB Atlas cluster.
