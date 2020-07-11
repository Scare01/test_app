// declare module '*.scss';

// interface Trade {
//   id: number;
//   name: string;
// }

// interface RootState {
//   user: {
//     trades: Trade[];
//     selectedTrades: Trade[];
//     searchField: string;
//   };
//   accessToken: string;
  
// }

// interface TradeState {
//   trades: Trade[];

//   accessToken: string;
// }

// interface Item {
//   id: number;
// }

type ActionHandler<T> =
  (state: RootState, payload: T extends (...args: any[]) =>
  infer R ? R: any) => RootState;


// interface Tokens {
//   access_token: string;
//   refresh_token: string;
// }

// interface User {
//   id: number;
//   username: string;
//   first_name: string;
//   last_name: string;
//   role: number;
//   email: string;
//   phone_number: string;
// }

// interface Auth {
//   tokens: Tokens;
//   current_user: User;
// } 

// interface Icon {
//   icon: string;
//   size: number;
// }

// interface PostTrade {
//   id?: number;
//   code?: number;
//   message?: string;
//   values?: string;
// }


interface RootState {
  // key: value
}

