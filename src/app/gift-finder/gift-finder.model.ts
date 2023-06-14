import { GiftFinderInterest } from './gift-finder-interest.type';
import { GiftFinderOccasion } from './gift-finder-occasion.enum';
import { GiftFinderTypeGift } from './gift-finder-type-gift.enum';
import { GiftFinderTypeReceiver } from './gift-finder-type-receiver.enum';

export interface GiftFinder {
  type_receiver: GiftFinderTypeReceiver;
  min_age_receiver: number;
  max_age_receiver: number;
  interests: GiftFinderInterest[];
  occasion: GiftFinderOccasion;
  type_gift: GiftFinderTypeGift;
  budget: number;
}
