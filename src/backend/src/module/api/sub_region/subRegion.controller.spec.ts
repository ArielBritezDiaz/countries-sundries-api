import { Test, TestingModule } from '@nestjs/testing';
import { SubRegionController } from './subRegion.controller';
import { SubRegionService } from './subRegion.service';
import { SubRegionsValueControlDTO } from './dto/subRegion.dto';
import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('SubRegionController', () => {
  let controller: SubRegionController;
  let service: SubRegionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubRegionController],
      providers: [SubRegionService, PrismaService, ConfigService],
    }).compile();

    controller = module.get<SubRegionController>(SubRegionController);
    service = module.get<SubRegionService>(SubRegionService);
  });

  describe('getAllSubRegions', () => {
    it('should return all subregions', async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;

      const mockQueryParams = {} as SubRegionsValueControlDTO;
      const expectedResult = [ {
        "id_sub_region": 1,
        "name": "South America",
        "id_region": 1
    },
    {
        "id_sub_region": 2,
        "name": "Caribbean",
        "id_region": 1
    },
    {
        "id_sub_region": 3,
        "name": "Central America",
        "id_region": 1
    },
    {
        "id_sub_region": 4,
        "name": "Northern America",
        "id_region": 1
    },
    {
        "id_sub_region": 5,
        "name": "Central Asia",
        "id_region": 2
    },
    {
        "id_sub_region": 6,
        "name": "Eastern Asia",
        "id_region": 2
    },
    {
        "id_sub_region": 7,
        "name": "South-eastern Asia",
        "id_region": 2
    },
    {
        "id_sub_region": 8,
        "name": "Sourthern Asia",
        "id_region": 2
    },
    {
        "id_sub_region": 9,
        "name": "Western Asia",
        "id_region": 2
    },
    {
        "id_sub_region": 10,
        "name": "Middle East",
        "id_region": 2
    },
    {
        "id_sub_region": 11,
        "name": "Northern Africa",
        "id_region": 3
    },
    {
        "id_sub_region": 12,
        "name": "Eastern Africa",
        "id_region": 3
    },
    {
        "id_sub_region": 13,
        "name": "Middle Africa",
        "id_region": 3
    },
    {
        "id_sub_region": 14,
        "name": "Southern Africa",
        "id_region": 3
    },
    {
        "id_sub_region": 15,
        "name": "Western Africa",
        "id_region": 3
    },
    {
        "id_sub_region": 16,
        "name": "Eastern Europe",
        "id_region": 4
    },
    {
        "id_sub_region": 17,
        "name": "Northern Europe",
        "id_region": 4
    },
    {
        "id_sub_region": 18,
        "name": "Southern Europe",
        "id_region": 4
    },
    {
        "id_sub_region": 19,
        "name": "Western Europe",
        "id_region": 4
    },
    {
        "id_sub_region": 20,
        "name": "Australia and New Zealand",
        "id_region": 5
    },
    {
        "id_sub_region": 21,
        "name": "Melanesia",
        "id_region": 5
    },
    {
        "id_sub_region": 22,
        "name": "Micronesia",
        "id_region": 5
    },
    {
        "id_sub_region": 23,
        "name": "Polynesia",
        "id_region": 5
    },
    {
        "id_sub_region": 24,
        "name": "North-east Antarctic Peninsula",
        "id_region": 6
    },
    {
        "id_sub_region": 25,
        "name": "South Orkney Islands",
        "id_region": 6
    },
    {
        "id_sub_region": 26,
        "name": "North-west Antarctic Peninsula",
        "id_region": 6
    },
    {
        "id_sub_region": 27,
        "name": "Enderby Land",
        "id_region": 6
    },
    {
        "id_sub_region": 28,
        "name": "Dronning Maud Land",
        "id_region": 6
    },
    {
        "id_sub_region": 29,
        "name": "East Antarctica",
        "id_region": 6
    },
    {
        "id_sub_region": 30,
        "name": "North Victoria Land",
        "id_region": 6
    },
    {
        "id_sub_region": 31,
        "name": "South Victoria Land",
        "id_region": 6
    },
    {
        "id_sub_region": 32,
        "name": "Transantarctic Mountains",
        "id_region": 6
    },
    {
        "id_sub_region": 33,
        "name": "Ellsworth Mountains",
        "id_region": 6
    },
    {
        "id_sub_region": 34,
        "name": "Marie Byrd Land",
        "id_region": 6
    },
    {
        "id_sub_region": 35,
        "name": "Adélie Land",
        "id_region": 6
    },
    {
        "id_sub_region": 36,
        "name": "Ellsworth Land",
        "id_region": 6
    },
    {
        "id_sub_region": 37,
        "name": "South Antarctic Peninsula.",
        "id_region": 6
    }];

      jest.spyOn(service, 'getAllSubRegions').mockResolvedValue(expectedResult);

      await controller.getAllSubRegions(mockResponse, mockQueryParams);
      
      expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.OK);
      expect(mockResponse.send).toHaveBeenCalledWith(expectedResult);
      const mockRecievedJSON = (mockResponse.send as jest.Mock).mock.calls[0][0]
      console.log("mockRecievedJSON:", mockRecievedJSON)
    });
  });

  // Add more test cases for validation, error handling, etc.
});
