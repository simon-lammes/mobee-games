export interface Player {
  /**
   * Should be UUID version 4 which can be generated with a [standard web API.](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
   */
  id: string;
  firstName: string;
  lastName: string;
  profileImage?: Blob;
}
