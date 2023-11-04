package db

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	uri = ""
)

/*
 * This class provides the mongoDB client. Use cases involving the mongoDB client should
 * take the form of a DAO class, which takes in a MongoClient instance as a dependency
 * and then defines specific methods that use the client to interact with mongoDB.
 */
type MongoClientProvider struct {
	MongoClient *mongo.Client
}

func NewMongoClientProvider() (*MongoClientProvider, error) {
	// Use the SetServerAPIOptions() method to set the Stable API version to 1
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)
	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		return &MongoClientProvider{}, fmt.Errorf("failed to connect to mongoDB: %v", err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	return &MongoClientProvider{client}, nil
}

func (m *MongoClientProvider) GetClient() *mongo.Client {
	return m.MongoClient
}
