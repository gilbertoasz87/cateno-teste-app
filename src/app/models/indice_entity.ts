import { BaseEntity } from './base_entity';
import { CountryEntity } from './country_entity';
import { IndicatorEntity } from './indicator_entity';

export class IndiceEntity {
    public indicator: IndicatorEntity = null;
    public country: CountryEntity = null;
    public countryiso3code: string = null;
    public date: string = null;
    public value: number = null;
    public unit: string  = null;
    public obs_status: string  = null;
    public decimal: number  = null;
}
