export interface VtexOrderForm {
  orderFormId: string;
  salesChannel: string;
  loggedIn: boolean;
  isCheckedIn: boolean;
  storeId: any;
  checkedInPickupPointId: any;
  allowManualPrice: boolean;
  canEditData: boolean;
  userProfileId: any;
  userType: string | null;
  ignoreProfileData: boolean;
  value: number;
  messages: Message[];
  items: Item[];
  selectableGifts: SelectableGift[];
  totalizers: Totalizer[];
  shippingData: ShippingData | null;
  clientProfileData: ClientProfileData | null;
  paymentData: PaymentData | null;
  marketingData: any;
  sellers: Seller[];
  clientPreferencesData: ClientPreferencesData | null;
  commercialConditionData: any;
  storePreferencesData: StorePreferencesData | null;
  giftRegistryData: any;
  openTextField: any;
  invoiceData: any;
  customData: CustomData | null;
  itemMetadata: ItemMetadata | null;
  hooksData: any;
  ratesAndBenefitsData: RatesAndBenefitsData | null;
  subscriptionData: any;
  itemsOrdination: ItemsOrdination | null;
}

export interface ItemsOrdination {
  criteria: string;
  ascending: boolean;
}

export interface RatesAndBenefitsData {
  rateAndBenefitsIdentifiers: RatesAndBenefitsIdentifier[];
  teaser: any[];
}

export interface ItemMetadata {
  items: InternalItemMetadata[];
}

export interface InternalItemMetadata {
  id: string;
  seller: string;
  name: string;
  skuName: string;
  productId: string;
  refId: string | null;
  ean: string;
  imageUrl: string;
  detailUrl: string;
  assemblyOptions: AssemblyOption[];
}

export interface AssemblyOption {
  id: string;
  name: string;
  required: boolean;
  inputValues: Schema;
  composition: any;
}

export interface StorePreferencesData {
  countryCode: string;
  saveUserData: boolean;
  timeZone: string;
  currencyCode: string;
  currencyLocale: number;
  currencySymbol: string;
  currencyFormatInfo: CurrencyFormatInfo;
}

export interface CurrencyFormatInfo {
  currencyDecimalDigits: number;
  currencyDecimalSeparator: string;
  currencyGroupSeparator: string;
  currencyGroupSize: number;
  startsWithCurrencySymbol: boolean;
}

export interface ClientPreferencesData {
  [key: string]: any;
}

export interface Seller {
  id: string;
  name: string;
  logo: string;
}

export interface PaymentData {
  installmentOptions: InstallmentOption[];
  paymentSystems: PaymentSystem[];
  payments: Payment[];
  giftCards: any[];
  giftCardMessages: any[];
  availableAccounts: any[];
  availableTokens: any[];
}

export interface Payment {
  paymentSystem: string;
  bin: any;
  accountId: any;
  tokenId: any;
  installments: number;
  referenceValue: number;
  value: number;
  merchantSellerPayments: MerchantSellerPayment[];
}

export interface MerchantSellerPayment {
  id: string;
  installments: number;
  referenceValue: number;
  value: number;
  interestRate: number;
  installmentValue: number;
}

export interface PaymentSystem {
  id: number;
  name: string;
  groupName: string;
  validator: Validator;
  stringId: string;
  template: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description?: string;
  requiresAuthentication: boolean;
  dueDate: string;
  availablePayments: any;
}

export interface Validator {
  regex?: string;
  mask?: string;
  cardCodeRegex?: string;
  cardCodeMask?: string;
  weights?: number[];
  useCvv: boolean;
  useExpirationDate: boolean;
  useCardHolderName: boolean;
  useBillingAddress: boolean;
}

export interface InstallmentOption {
  paymentSystem: string;
  bin: any;
  paymentName: any;
  paymentGroupName: any;
  value: number;
  installments: Installment[];
}

export interface Installment {
  count: number;
  hasInterestRate: boolean | null;
  interestRate: number | null;
  value: number;
  total: number;
  sellerMerchantInstallments: SellerMerchantInstallment[];
}

export interface SellerMerchantInstallment {
  id: string;
  count: number;
  hasInterestRate: boolean | null;
  interestRate: number | null;
  value: number;
  total: number;
}

export interface ClientProfileData {
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  documentType: string;
  phone: string;
  corporateName: any;
  tradeName: any;
  corporateDocument: any;
  stateInscription: string;
  corporatePhone: any;
  isCorporate: boolean;
  profileCompleteOnLoading: boolean;
  profileErrorOnLoading: boolean;
  customerClass: any;
}

export interface ShippingData {
  address: Address;
  logisticsInfo: LogisticsInfo[];
  selectedAddresses: Address[];
  availableAddresses: Address[];
  pickupPoints: PickupPoint[];
}

export interface PickupPoint {
  friendlyName: string;
  address: Address;
  additionalInfo: string;
  id: string;
  businessHours: BusinessHour[];
}

export interface BusinessHour {
  DayOfWeek: number;
  OpeningTime: string;
  ClosingTime: string;
}

export interface LogisticsInfo {
  itemIndex: number;
  selectedSla: string;
  selectedDeliveryChannel: string;
  addressId: string;
  slas: Sla[];
  shipsTo: string[];
  itemId: string;
  deliveryChannels: DeliveryChannel[];
}

export interface DeliveryChannel {
  id: string;
}

export interface Sla {
  id: string;
  deliveryChannel: string;
  name: string;
  deliveryIds: DeliveryId[];
  shippingEstimate: string;
  shippingEstimateDate: any;
  lockTTL: any;
  availableDeliveryWindows: AvailableDeliveryWindow[];
  deliveryWindow: AvailableDeliveryWindow | null;
  price: number;
  listPrice: number;
  tax: number;
  pickupStoreInfo: PickupStoreInfo;
  pickupPointId: string | null;
  pickupDistance: number;
  polygonName: string | null;
  transitTime: string;
}

export interface PickupStoreInfo {
  isPickupStore: boolean;
  friendlyName: string | null;
  address: Address | null;
  additionalInfo: string | null;
  dockId: string | null;
}

export interface AvailableDeliveryWindow {
  startDateUtc: string;
  endDateUtc: string;
  price: number;
  lisPrice: number;
  tax: number;
}

export interface DeliveryId {
  courierId: string;
  warehouseId: string;
  dockId: string;
  courierName: string;
  quantity: number;
}

export interface Address {
  addressType: string | null;
  receiverName: string | null;
  addressId: string | null;
  postalCode: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  street: string | null;
  number: string | null;
  neighborhood: string | null;
  complement: string | null;
  reference: string | null;
  geoCoordinates: number[] | null;
}

export interface Totalizer {
  id: string;
  name: string;
  value: number;
}

export interface SelectableGift {
  id: string;
  availableQuantity: number;
  availableGifts: AvailableGift[];
  canChoose: CanChoose;
  currentGifts: CanChoose;
  selectedGifts: SelectedGift[];
  nothingSelected: boolean;
}

export interface SelectedGift {
  id: string;
  seller: string;
  index: number;
}

export interface CanChoose {
  count: number;
}

export interface AvailableGift {
  isSelected: boolean;
  uniqueId: string;
  id: string;
  productId: string;
  productRefId: string;
  refId: string;
  ean: string;
  name: string;
  skuName: string;
  modalType: any;
  parentItemIndex: any;
  parentAssemblyBinding: any;
  assemblies: any[];
  priceValidUntil: any;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice: number;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: AdditionalInfo;
  preSaleDate: any;
  productCategoryIds: string;
  productCategories: ProductCategories;
  quantity: number;
  seller: string;
  sellerChain: string[];
  imageUrl: string;
  detailUrl: string;
  components: any[];
  bundleItems: any[];
  attachments: any[];
  attachmentOfferings: any[];
  offerings: Offering[];
  priceTags: PriceTag[];
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: any;
  index: number;
}

export interface Item {
  index?: number;
  uniqueId: string;
  id: string;
  productId: string;
  productRefId: string;
  refId: string | null;
  ean: string;
  name: string;
  skuName: string;
  modalType: string | null;
  parentItemIndex: any;
  parentAssemblyBinding: any;
  assemblies: any[];
  priceValidUntil: string | null;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice: number;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: AdditionalInfo;
  preSaleDate: any;
  productCategoryIds: string;
  productCategories: ProductCategories;
  quantity: number;
  seller: string;
  sellerChain: string[];
  imageUrl: string;
  detailUrl: string;
  components: any[];
  bundleItems: any[];
  attachments: any[];
  attachmentOfferings: AttachmentOffering[];
  offerings: Offering[];
  priceTags: PriceTag[];
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: any;
}

export interface PriceTag {
  name: string;
  value: number;
  rawValue: number;
  isPercentual: boolean;
  identifier: string;
  ratesAndBenefitsIdentifier: RatesAndBenefitsIdentifier | null;
}

export interface RatesAndBenefitsIdentifier {
  id: string;
  name: string;
  featured: boolean;
  description: string;
  matchedParameters: MatchedParameters;
  additionalInfo: any;
}

export interface MatchedParameters {
  [key: string]: string;
}

export interface Offering {
  type: string;
  id: string;
  name: string;
  allowGiftMessage: boolean;
  attachmentOfferings: any[];
  price: number;
}

export interface AttachmentOffering {
  name: string;
  required: boolean;
  schema: Schema;
}

export interface Schema {
  text?: Text;
  prices?: Text;
  points?: Text;
}

export interface Text {
  maximumNumberOfCharacters: number;
  domain: any[];
}

export interface ProductCategories {
  [key: string]: string;
}

export interface AdditionalInfo {
  brandName: string;
  brandId: string;
  offeringInfo: any;
  offeringType: any;
  offeringTypeId: any;
}

export interface Message {
  code: string;
  text: string;
  status: string;
  fields: Fields;
}

export interface CustomData {
  customApps: CustomApp[];
}

export interface CustomApp {
  id: string;
  fields: Fields;
  major: number;
}

export interface Fields {
  [key: string]: any;
}

type TypesUpdateCustomData =
  | 'setDefaultPointsAndPrice'
  | 'setCorrectPointsMaxPoints'
  | 'setCorrectPointsMinPoints'
  | 'setCorrectPointsRangePoints'
  | 'setCurrentSelection'
  | 'setPriceByQuantity'
  | 'allProductsInputs';

export type PaymentMethod = 'points-and-money' | 'only-points' | 'only-money';

export type ProductType = 'raffle' | 'common';

export interface CustomDataProduct {
  points: number;
  productId: string;
  id: string;
  variations?: ProductVariations[];
  type?: TypesUpdateCustomData;
  minPoints?: number;
  productType?: ProductType;
  paymentMethod?: PaymentMethod;
}

export interface ProductVariations {
  name: string;
  values: string[];
}
