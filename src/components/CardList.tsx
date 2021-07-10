import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imgUrl, setImgUrl] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(imageUrl: string): void {
    setImgUrl(imageUrl);
    onOpen();
  }
  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} />
    </>
  );
}
