import { MessengerConnector } from 'bottender';

export default class SimpleMessengerConnector extends MessengerConnector {
  updateSession(session, body) {
    if (!session.user) {
      const senderId = this.getUniqueSessionKey(body);

      // eslint-disable-next-line no-param-reassign
      session.user = {
        _updatedAt: new Date().toISOString(),
        id: senderId,
      };
    }

    Object.freeze(session.user);
    Object.defineProperty(session, 'user', {
      configurable: false,
      enumerable: true,
      writable: false,
      value: session.user,
    });
  }
}
