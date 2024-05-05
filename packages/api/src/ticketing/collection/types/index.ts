import { DesunifyReturnType } from '@@core/utils/types/desunify.input';
import {
  UnifiedCollectionInput,
  UnifiedCollectionOutput,
} from './model.unified';
import { OriginalCollectionOutput, OriginalCollectionInput } from '@@core/utils/types/original/original.ticketing';
import { ApiResponse } from '@@core/utils/types';

export interface ICollectionService {
  syncCollections(
    linkedUserId: string,
    custom_properties?: string[],
  ): Promise<ApiResponse<OriginalCollectionOutput[]>>;

  addCollection(
    collectionData: DesunifyReturnType,
    linkedUserId: string,
  ): Promise<ApiResponse<OriginalCollectionInput>>;
}

export interface ICollectionMapper {
  desunify(
    source: UnifiedCollectionInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): DesunifyReturnType;

  unify(
    source: OriginalCollectionOutput | OriginalCollectionOutput[],
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedCollectionOutput | UnifiedCollectionOutput[];
}
