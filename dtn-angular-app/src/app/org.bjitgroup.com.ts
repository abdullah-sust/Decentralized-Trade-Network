import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.bjitgroup.com{
   export class Product extends Asset {
      productId: string;
      productName: string;
      description: string;
      quantity: number;
      unitPrice: number;
      owner: Person;
   }
   export class Person extends Participant {
      personId: string;
      firstName: string;
      lastName: string;
      address: string;
      balance: number;
   }
   export class productTransfer extends Transaction {
      ownerId: string;
      newOwnerId: string;
      productId: string;
      product: Product;
      owner: Person;
      newOwner: Person;
   }
// }
