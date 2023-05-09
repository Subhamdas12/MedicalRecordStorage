export const provider = (state = {}, action) => {
  switch (action.type) {
    case "PROVIDER_LOADED":
      return { ...state, connection: action.connection };
    case "NETWORK_LOADED":
      return { ...state, chainId: action.chainId };
    case "ACCOUNT_LOADED":
      return {
        ...state,
        account: action.account,
      };
    case "ETHER_BALANCE_LOADED":
      return {
        ...state,
        balance: action.balance,
      };
    default:
      return state;
  }
};
const DEFAULT_MEDICAL_STATE = {
  loaded: false,
  contract: {},
  transaction: {
    isSuccessful: false,
  },
  allMedical: {
    loaded: false,
    data: [],
  },
  deleteMedical: {
    loaded: false,
    data: [],
  },
  events: [],
};
export const medical = (state = DEFAULT_MEDICAL_STATE, action) => {
  let index, data;
  switch (action.type) {
    case "MEDICAL_LOADED":
      return {
        ...state,
        loaded: true,
        contract: action.medical,
      };
    case "ALL_MEDICAL_RECORDS":
      return {
        ...state,
        allMedical: {
          loaded: true,
          data: action.medicalRecords,
        },
      };
    case "ALL_DELETED_RECORDS":
      return {
        ...state,
        deleteMedical: {
          loaded: true,
          data: action.deleteRecords,
        },
      };
    case "NEW_RECORD_LOADED":
      return {
        ...state,
        transaction: {
          isPending: true,
          isSuccessful: false,
        },
      };
    case "NEW_RECORD_SUCCESS":
      index = state.allMedical.data.findIndex(
        (order) =>
          order.recordId.toString() === action.medicalOrder.recordId.toString()
      );
      if (index === -1) {
        data = [...state.allMedical.data, action.medicalOrder];
      } else {
        data = state.allMedical.data;
      }
      return {
        ...state,
        allMedical: {
          ...state.allMedical,
          data,
        },
        transaction: {
          isPending: false,
          isSuccessful: true,
        },
        events: [action.event, ...state.events],
      };
    case "NEW_RECORD_FAIL":
      return {
        ...state,
        transaction: {
          isPending: false,
          isError: true,
          isSuccessful: false,
        },
      };
    case "DELETE_REQUEST_INNITIALIZED":
      return {
        ...state,
        transaction: {
          isPending: true,
          isSuccessful: false,
        },
      };
    case "DELETE_REQUEST_SUCCESS":
      index = state.deleteMedical.data.findIndex(
        (order) =>
          order.recordId.toString() === action.deleteOrder.recordId.toString()
      );
      if (index === -1) {
        data = [...state.deleteMedical.data, action.deleteOrder];
      } else {
        data = state.deleteMedical.data;
      }
      return {
        ...state,
        deleteMedical: {
          ...state.deleteMedical,
          data,
        },
        transaction: {
          isPending: false,
          isSuccessful: true,
        },
        events: [action.event, ...state.events],
      };
    case "DELETE_REQUEST_FAILED":
      return {
        ...state,
        transaction: {
          isPending: false,
          isError: true,
          isSuccessful: false,
        },
      };
    default:
      return state;
  }
};
