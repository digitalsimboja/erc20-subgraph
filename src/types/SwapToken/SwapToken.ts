// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get burner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MinterConfigured extends ethereum.Event {
  get params(): MinterConfigured__Params {
    return new MinterConfigured__Params(this);
  }
}

export class MinterConfigured__Params {
  _event: MinterConfigured;

  constructor(event: MinterConfigured) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get minterAllowedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get oldMinter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MasterMinterChanged extends ethereum.Event {
  get params(): MasterMinterChanged__Params {
    return new MasterMinterChanged__Params(this);
  }
}

export class MasterMinterChanged__Params {
  _event: MasterMinterChanged;

  constructor(event: MasterMinterChanged) {
    this._event = event;
  }

  get newMasterMinter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Blacklisted extends ethereum.Event {
  get params(): Blacklisted__Params {
    return new Blacklisted__Params(this);
  }
}

export class Blacklisted__Params {
  _event: Blacklisted;

  constructor(event: Blacklisted) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UnBlacklisted extends ethereum.Event {
  get params(): UnBlacklisted__Params {
    return new UnBlacklisted__Params(this);
  }
}

export class UnBlacklisted__Params {
  _event: UnBlacklisted;

  constructor(event: UnBlacklisted) {
    this._event = event;
  }

  get _account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BlacklisterChanged extends ethereum.Event {
  get params(): BlacklisterChanged__Params {
    return new BlacklisterChanged__Params(this);
  }
}

export class BlacklisterChanged__Params {
  _event: BlacklisterChanged;

  constructor(event: BlacklisterChanged) {
    this._event = event;
  }

  get newBlacklister(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Pause extends ethereum.Event {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends ethereum.Event {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class PauserChanged extends ethereum.Event {
  get params(): PauserChanged__Params {
    return new PauserChanged__Params(this);
  }
}

export class PauserChanged__Params {
  _event: PauserChanged;

  constructor(event: PauserChanged) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SwapToken extends ethereum.SmartContract {
  static bind(address: Address): SwapToken {
    return new SwapToken("SwapToken", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(_spender: Address, _value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(_spender: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_spender),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(_from: Address, _to: Address, _value: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    _from: Address,
    _to: Address,
    _value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_value)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  removeMinter(minter: Address): boolean {
    let result = super.call("removeMinter", "removeMinter(address):(bool)", [
      ethereum.Value.fromAddress(minter)
    ]);

    return result[0].toBoolean();
  }

  try_removeMinter(minter: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("removeMinter", "removeMinter(address):(bool)", [
      ethereum.Value.fromAddress(minter)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  masterMinter(): Address {
    let result = super.call("masterMinter", "masterMinter():(address)", []);

    return result[0].toAddress();
  }

  try_masterMinter(): ethereum.CallResult<Address> {
    let result = super.tryCall("masterMinter", "masterMinter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  mint(_to: Address, _amount: BigInt): boolean {
    let result = super.call("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_mint(_to: Address, _amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  configureMinter(minter: Address, minterAllowedAmount: BigInt): boolean {
    let result = super.call(
      "configureMinter",
      "configureMinter(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(minter),
        ethereum.Value.fromUnsignedBigInt(minterAllowedAmount)
      ]
    );

    return result[0].toBoolean();
  }

  try_configureMinter(
    minter: Address,
    minterAllowedAmount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "configureMinter",
      "configureMinter(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(minter),
        ethereum.Value.fromUnsignedBigInt(minterAllowedAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minterAllowance(minter: Address): BigInt {
    let result = super.call(
      "minterAllowance",
      "minterAllowance(address):(uint256)",
      [ethereum.Value.fromAddress(minter)]
    );

    return result[0].toBigInt();
  }

  try_minterAllowance(minter: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minterAllowance",
      "minterAllowance(address):(uint256)",
      [ethereum.Value.fromAddress(minter)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  pauser(): Address {
    let result = super.call("pauser", "pauser():(address)", []);

    return result[0].toAddress();
  }

  try_pauser(): ethereum.CallResult<Address> {
    let result = super.tryCall("pauser", "pauser():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transfer(_to: Address, _value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(_to: Address, _value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_to),
      ethereum.Value.fromUnsignedBigInt(_value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  blacklister(): Address {
    let result = super.call("blacklister", "blacklister():(address)", []);

    return result[0].toAddress();
  }

  try_blacklister(): ethereum.CallResult<Address> {
    let result = super.tryCall("blacklister", "blacklister():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currency(): string {
    let result = super.call("currency", "currency():(string)", []);

    return result[0].toString();
  }

  try_currency(): ethereum.CallResult<string> {
    let result = super.tryCall("currency", "currency():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  isBlacklisted(_account: Address): boolean {
    let result = super.call("isBlacklisted", "isBlacklisted(address):(bool)", [
      ethereum.Value.fromAddress(_account)
    ]);

    return result[0].toBoolean();
  }

  try_isBlacklisted(_account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isBlacklisted",
      "isBlacklisted(address):(bool)",
      [ethereum.Value.fromAddress(_account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UnBlacklistCall extends ethereum.Call {
  get inputs(): UnBlacklistCall__Inputs {
    return new UnBlacklistCall__Inputs(this);
  }

  get outputs(): UnBlacklistCall__Outputs {
    return new UnBlacklistCall__Outputs(this);
  }
}

export class UnBlacklistCall__Inputs {
  _call: UnBlacklistCall;

  constructor(call: UnBlacklistCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnBlacklistCall__Outputs {
  _call: UnBlacklistCall;

  constructor(call: UnBlacklistCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveMinterCall extends ethereum.Call {
  get inputs(): RemoveMinterCall__Inputs {
    return new RemoveMinterCall__Inputs(this);
  }

  get outputs(): RemoveMinterCall__Outputs {
    return new RemoveMinterCall__Outputs(this);
  }
}

export class RemoveMinterCall__Inputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMinterCall__Outputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _currency(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _decimals(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _masterMinter(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _pauser(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _blacklister(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class ConfigureMinterCall extends ethereum.Call {
  get inputs(): ConfigureMinterCall__Inputs {
    return new ConfigureMinterCall__Inputs(this);
  }

  get outputs(): ConfigureMinterCall__Outputs {
    return new ConfigureMinterCall__Outputs(this);
  }
}

export class ConfigureMinterCall__Inputs {
  _call: ConfigureMinterCall;

  constructor(call: ConfigureMinterCall) {
    this._call = call;
  }

  get minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get minterAllowedAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConfigureMinterCall__Outputs {
  _call: ConfigureMinterCall;

  constructor(call: ConfigureMinterCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdatePauserCall extends ethereum.Call {
  get inputs(): UpdatePauserCall__Inputs {
    return new UpdatePauserCall__Inputs(this);
  }

  get outputs(): UpdatePauserCall__Outputs {
    return new UpdatePauserCall__Outputs(this);
  }
}

export class UpdatePauserCall__Inputs {
  _call: UpdatePauserCall;

  constructor(call: UpdatePauserCall) {
    this._call = call;
  }

  get _newPauser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdatePauserCall__Outputs {
  _call: UpdatePauserCall;

  constructor(call: UpdatePauserCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateMasterMinterCall extends ethereum.Call {
  get inputs(): UpdateMasterMinterCall__Inputs {
    return new UpdateMasterMinterCall__Inputs(this);
  }

  get outputs(): UpdateMasterMinterCall__Outputs {
    return new UpdateMasterMinterCall__Outputs(this);
  }
}

export class UpdateMasterMinterCall__Inputs {
  _call: UpdateMasterMinterCall;

  constructor(call: UpdateMasterMinterCall) {
    this._call = call;
  }

  get _newMasterMinter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateMasterMinterCall__Outputs {
  _call: UpdateMasterMinterCall;

  constructor(call: UpdateMasterMinterCall) {
    this._call = call;
  }
}

export class UpdateBlacklisterCall extends ethereum.Call {
  get inputs(): UpdateBlacklisterCall__Inputs {
    return new UpdateBlacklisterCall__Inputs(this);
  }

  get outputs(): UpdateBlacklisterCall__Outputs {
    return new UpdateBlacklisterCall__Outputs(this);
  }
}

export class UpdateBlacklisterCall__Inputs {
  _call: UpdateBlacklisterCall;

  constructor(call: UpdateBlacklisterCall) {
    this._call = call;
  }

  get _newBlacklister(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateBlacklisterCall__Outputs {
  _call: UpdateBlacklisterCall;

  constructor(call: UpdateBlacklisterCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class BlacklistCall extends ethereum.Call {
  get inputs(): BlacklistCall__Inputs {
    return new BlacklistCall__Inputs(this);
  }

  get outputs(): BlacklistCall__Outputs {
    return new BlacklistCall__Outputs(this);
  }
}

export class BlacklistCall__Inputs {
  _call: BlacklistCall;

  constructor(call: BlacklistCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class BlacklistCall__Outputs {
  _call: BlacklistCall;

  constructor(call: BlacklistCall) {
    this._call = call;
  }
}
