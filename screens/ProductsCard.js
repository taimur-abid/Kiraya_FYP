import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import { newData } from './data';

const ProductsCard = ({product, onPress}) => {
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={onPress} style={{flexDirection: 'column'}}>
        <Card style={styles.card}>
          <Card.Cover source={{uri :product.png[0]}} style={styles.cardImage} />
          <Card.Content>
            <Title
              style={{
                color: '#000000',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              {product.adtitle}
            </Title>
            <Paragraph
              style={{textAlign: 'center', fontWeight: '700', fontSize: 14}}>
              RS-{product.price}
            </Paragraph>
            <Text
              style={{textAlign: 'center', fontWeight: '600', fontSize: 15}}>
              {product.location}
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:200,
    marginVertical: 5,
    marginHorizontal: 0,
    borderRadius: 5,
    elevation: 1,
    backgroundColor: '#0492C2',
  },
  cardImage: {
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default ProductsCard;
